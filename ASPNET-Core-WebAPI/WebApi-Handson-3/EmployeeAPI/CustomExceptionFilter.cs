using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

public class CustomExceptionFilter : IExceptionFilter
{
    public void OnException(ExceptionContext context)
    {
        File.AppendAllText(
            "errorlog.txt",
            context.Exception.Message + Environment.NewLine);

        context.Result = new ObjectResult(
            context.Exception.Message)
        {
            StatusCode = 500
        };

        context.ExceptionHandled = true;
    }
}