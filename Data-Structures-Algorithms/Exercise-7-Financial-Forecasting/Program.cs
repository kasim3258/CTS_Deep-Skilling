using System;

class FinancialForecast
{
    // Recursive method to calculate future value
    static double PredictFutureValue(double currentValue, double growthRate, int years)
    {
        if (years == 0)
        {
            return currentValue;
        }

        return PredictFutureValue(
            currentValue * (1 + growthRate / 100),
            growthRate,
            years - 1);
    }

    static void Main()
    {
        Console.Write("Enter Current Value: ");
        double currentValue = Convert.ToDouble(Console.ReadLine());

        Console.Write("Enter Annual Growth Rate (%): ");
        double growthRate = Convert.ToDouble(Console.ReadLine());

        Console.Write("Enter Number of Years: ");
        int years = Convert.ToInt32(Console.ReadLine());

        double futureValue = PredictFutureValue(currentValue, growthRate, years);

        Console.WriteLine(
            $"Predicted Future Value after {years} years = {futureValue:F2}");
    }
}