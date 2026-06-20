using System;
using System.Linq;

class Program
{
    static Product LinearSearch(Product[] products, int id)
    {
        foreach (Product product in products)
        {
            if (product.ProductId == id)
                return product;
        }
        return null;
    }

    static Product BinarySearch(Product[] products, int id)
    {
        int low = 0;
        int high = products.Length - 1;

        while (low <= high)
        {
            int mid = (low + high) / 2;

            if (products[mid].ProductId == id)
                return products[mid];

            if (products[mid].ProductId < id)
                low = mid + 1;
            else
                high = mid - 1;
        }

        return null;
    }

    static void Main()
    {
        Product[] products =
        {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Mobile", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Book", "Education")
        };

        Console.WriteLine("Available Product IDs: 101, 102, 103, 104, 105");
        Console.Write("Enter Product ID to Search: ");

        int searchId = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("\nLinear Search Result:");
        Product result1 = LinearSearch(products, searchId);

        if (result1 != null)
            result1.Display();
        else
            Console.WriteLine("Product Not Found");

        products = products.OrderBy(p => p.ProductId).ToArray();

        Console.WriteLine("\nBinary Search Result:");
        Product result2 = BinarySearch(products, searchId);

        if (result2 != null)
            result2.Display();
        else
            Console.WriteLine("Product Not Found");
    }
}