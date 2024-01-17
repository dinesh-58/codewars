using System;
using System.Linq;

public static class Kata
{
    public static string ReverseWords(string str)
    {
        string[] split = str.Split();
        for(int i=0; i<split.Length; i++) {
            split[i] = new String(split[i].ToCharArray().Reverse().ToArray());
        }
        return String.Join(' ', split);
    }
}
