using System;
using System.Collections.Generic;

namespace CSharp_Excercici2_Fase4
{ 
    class Program
    {
        static void Main(string[] args)
        {
            //FASE 1
            char[] caracters = { 'J', 'o', 'r', 'd', 'i' };
            for (int i = 0; i < caracters.Length; i++)
            {
                Console.WriteLine(caracters[i]);
            }

            //FASE 2

            List<char> name = new List<char>() { 'J', 'o', 'r', 'd', 'i' };

            for (int i = 0; i < name.Count; i++)
            {
                if (name[i] == 'a' || name[i] == 'e' || name[i] == 'i' || name[i] == 'o' || name[i] == 'u' || name[i] == 'A' || name[i] == 'E' || name[i] == 'I' || name[i] == 'O' || name[i] == 'U' || name[i] == 'á' || name[i] == 'é' || name[i] == 'í' || name[i] == 'ó' || name[i] == 'ú' || name[i] == 'à' || name[i] == 'è' || name[i] == 'ò')
                {
                    Console.WriteLine("VOCAL");
                }
                else
                {
                    if (name[i] == 'b' || name[i] == 'c' || name[i] == 'd' || name[i] == 'f' || name[i] == 'g' || name[i] == 'h' || name[i] == 'j' || name[i] == 'k' || name[i] == 'l' || name[i] == 'm' || name[i] == 'n' || name[i] == 'ñ' || name[i] == 'p' || name[i] == 'q' || name[i] == 'r' || name[i] == 's' || name[i] == 't' || name[i] == 'u' || name[i] == 'v' || name[i] == 'w' || name[i] == 'x' || name[i] == 'y' || name[i] == 'z' || name[i] == 'B' || name[i] == 'C' || name[i] == 'D' || name[i] == 'F' || name[i] == 'G' || name[i] == 'H' || name[i] == 'J' || name[i] == 'K' || name[i] == 'I' || name[i] == 'M' || name[i] == 'N' || name[i] == 'Ñ' || name[i] == 'P' || name[i] == 'Q' || name[i] == 'R' || name[i] == 'S' || name[i] == 'T' || name[i] == 'U' || name[i] == 'V' || name[i] == 'W' || name[i] == 'X' || name[i] == 'Y' || name[i] == 'Z')
                    {
                        Console.WriteLine("CONSONANT");
                    }
                    else
                    {
                        if (name[i] == '0' || name[i] == '1' || name[i] == '2' || name[i] == '3' || name[i] == '4' || name[i] == '5' || name[i] == '6' || name[i] == '7' || name[i] == '8' || name[i] == '9')
                        {
                            Console.WriteLine("Els noms de persones no contenen números!");
                        }
                    }
                }
            }

            //FASE 3

            Dictionary<char, int> lletres = new Dictionary<char, int>();
            for (int i = 0; i < name.Count; i++)
            {
                if (lletres.ContainsKey(name[i]))
                {
                    lletres[name[i]]++;
                }
                else
                {
                    lletres.Add(name[i], 1);
                }
            }

            //FASE 4

            List<char> surname = new List<char>() {'T','e','i','x','i','d','ó'};
            List<char> fullName = new List<char>();

            foreach (char letter in name)
            {
                fullName.Add(letter);
            }
            fullName.Add(' ');
            foreach (char letter in surname)
            {
                fullName.Add(letter);
            }

            name = null;
            surname = null;
            
        }
    }
}
