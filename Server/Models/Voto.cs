using System;

namespace Tp11_Lopez.Models
{
    public class Voto
    {
        private int _DNI;

        private int _NumeroTramite;

        public Voto(int dNI, int numeroTramite)
        {
            _DNI = dNI;
            _NumeroTramite = numeroTramite;
        }

        public int DNI{
            get { return _DNI;}
            set { _DNI = value;}
        }

        public int NumeroTramite {
            get { return _NumeroTramite;}
            set { _NumeroTramite = value;}
        }
    }
}
