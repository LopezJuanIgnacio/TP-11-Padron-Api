using System;

namespace Tp11_Lopez.Models
{
    public class Persona
    {
        private int _DNI;
        private string _Nombre;
        private string _Apellido;
        private int _NumeroTramite;
        private int _IdEstablecimiento;
        private bool _Voto;
        private DateTime _Fecha;

        public int DNI{
            get { return _DNI;}
            set { _DNI = value;}
        }
        public string Nombre {
            get { return _Nombre;}
            set { _Nombre = value;}
        }
        public string Apellido {
            get { return _Apellido;}
            set { _Apellido = value;}
        }
        public int NumeroTramite {
            get { return _NumeroTramite;}
            set { _NumeroTramite = value;}
        }
        public int IdEstablecimiento {
            get { return _IdEstablecimiento;}
            set { _IdEstablecimiento = value;}
        }
        public bool Voto {
            get { return _Voto;}
            set { _Voto = value;}
        }
        public DateTime Fecha{
            get { return _Fecha;}
            set { _Fecha = value;}
        }
    }
}
