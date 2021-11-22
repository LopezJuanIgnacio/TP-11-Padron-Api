using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Tp11_Lopez.Models;
using Tp11_Lopez.Services;

namespace Tp11_Lopez.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PadronController : ControllerBase
    {
        private readonly ILogger<PadronController> _logger;

        public PadronController(ILogger<PadronController> logger)
        {
            _logger = logger;
        }

        [HttpGet("{dni}")]
        public ActionResult<PersonaYEstablecimiento> Get(int dni){
            PersonaYEstablecimiento e = BD.ConsultaPersonaYEstablecimiento(dni);
            if(e is null) return NotFound();
            return e;
        }
        [HttpPost()]
        public ActionResult<PersonaYEstablecimiento> Votar(Voto voto){
            PersonaYEstablecimiento e = BD.ConsultaPersonaYEstablecimiento(voto.DNI);
            if(e is null) return NotFound();
            if(e.NumeroTramite != voto.NumeroTramite || e.Voto) return BadRequest();
            BD.Votar(e.DNI, e.NumeroTramite);
            return Ok();
        }
    }
}
