using System;

public class NthSeries {
    public static string seriesSum (int n) {
        // if (n == 0) return "0.00";
        double result = 0;
        double denominator = 1;
        for(int i=0; i<n; i++) {
            result += 1 / denominator;
            denominator += 3;
        }
        return Math.Round(result, 2).ToString("0.00");
    }
}

