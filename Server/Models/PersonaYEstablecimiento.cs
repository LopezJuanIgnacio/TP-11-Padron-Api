using System;

namespace Tp11_Lopez.Models
{
    public class PersonaYEstablecimiento : Persona
    {
        private string _ENombre;
        private string _Direccion;
        private string _Localidad;


        public string ENombre {get; set;}
        public string Direccion {get; set;}
        public string Localidad {get; set;}
        
    }
}