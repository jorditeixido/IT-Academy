using System;
using System.Collections.Generic;

namespace Restaurant
{
    class Program
    {
        //FASE 1
        /*
        Creeu una variable int per cada un dels bitllets que existeixen des de 5€ a 500€, 
        haureu de crear un altre variable per guardar el preu total del menjar. (1 punt)
        Creeu dos arrays, un on guardarem el menú(5 plats) i un altre on guardarem el preu de cada plat. (1 punt)
        */
        public static int billet5 = 5, billet10 = 10, billet20 = 20,
            billet50 = 50, billet100 = 100, billet200 = 200, billet500 = 500,
            preu = 0;
        public static string[] plats = new string[5];
        public static int[] preus = new int[5];
        public static List<int> comanda = new List<int>();

        public static string FI = "fi";
        public static string opcio = "";

        static void Main()
        {
            //FASE 2
            /*
            Amb un bucle for haurem d’omplir els dos arrays anteriorment creats.
            Afegirem el nom del plat i després el preu. (1 punt)
            Un cop plens els dos arrays haurem de mostrar - los i preguntar que es vol per menjar, 
            guardarem la informació en una List fent servir un bucle while. (1 punt)
            Haurem de preguntar si es vol seguir demanant menjar.Podeu fer servir el sistema(1:Si / 0:No)
            per tant haureu de crear un altre variable int per guardar la informació. (1 punt)
            */
            Fase2();

        }
        public static void Fase2()
        {
            OmplirMenu();
            opcio = "";
            while (opcio != FI)
            {
                MostrarMenu();
                Console.WriteLine("Introdueix una opció:");
                opcio = Console.ReadLine();
                if (opcio != FI) { AfegirPlat(opcio); }
                MostrarComanda();
            }
        }
        public static void OmplirMenu()
        {
            /*
            FRAGMENT DE CODI PER FER TEST I NO TENIR DE FICAR ELS PLATS CONTINUAMENT
            plats[0] = "Macarrons";
            preus[0] = 10;
            plats[1] = "Paella";
            preus[1] = 15;
            plats[2] = "Hamburguesa";
            preus[2] = 8;
            plats[3] = "Sardinada";
            preus[3] = 12;
            plats[4] = "Amanida";
            preus[4] = 9;
            */
            
            for (int i = 0; i < 5; i++)
            {
                Console.WriteLine("Introdueix el plat d'index " + i + ":");
                plats[i] = Console.ReadLine();
                Console.WriteLine("Introdueix el preu del plat d'index " + i + ":");
                // Aquesta instrucció no contempla l'opcio de que l'usuari introdueixi un valor alfanuméric per no surtirnos del enunciat del exerccii
                preus[i] = Convert.ToInt32(Console.ReadLine());
            }
        }

        public static void AfegirPlat(string opcio)
        {
            bool error = false; 
            int absolut=0;
            try
            {
                absolut = Math.Abs(Convert.ToInt32(opcio));
            } 
            catch 
            {
                error = true;
            }
            if (absolut==0 && opcio!="0") {error=true;}    
            else {if (absolut>4) {error=true;}}
            if (!error) {
                comanda.Add(absolut);
            } else {
                Console.WriteLine("L'opció introduida no és correcta, torna a intentar-ho");
            }
        }
        public static void MostrarComanda()
        {
            comanda.Sort();
            int[] peticions = new int[plats.Length];
            Console.WriteLine("LA TEVA COMANDA ACTUAL:");
            foreach (int plat in comanda)
            {
                peticions[plat]++;
            }
            int i = 0;
            int subtotal;
            int total = 0;
            foreach (int peticio in peticions)
            {
                if (peticio > 0) 
                {
                    subtotal = peticio * preus[i];
                    Console.WriteLine(plats[i] + "(" + peticio + ") * " + preus[i] + " Euros = " + (subtotal) + " Euros");
                    total += subtotal;
                }
                i++;
            }
            Console.WriteLine("TOTAL COMANDA=" + total + " Euros");
        }
        public static void MostrarMenu()
        {
            for (int i = 0; i < plats.Length; i++)
            {
                Console.WriteLine(i + "- " + plats[i] + "..." + preus[i] + " Euros");
            }
            Console.WriteLine("Per finalitzar la comanda intrudueix 'fi'");
        }
    }
}
