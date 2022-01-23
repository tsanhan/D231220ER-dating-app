using System.Net;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using API.Errors;
using System.Text.Json;

namespace API.Middleware
{
    public class ExceptionMiddleware
    {
        public readonly RequestDelegate _next;
        public readonly ILogger<ExceptionMiddleware> _logger;
        public readonly IHostEnvironment _env;
        
        
        public ExceptionMiddleware(
            RequestDelegate next,
            ILogger<ExceptionMiddleware> logger,
            IHostEnvironment env
        )
        {
            _next = next;
            _logger = logger;
            _env = env;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception ex)
            {
                 _logger.LogError(ex, ex.Message);

                 context.Request.ContentType = "application/json";
                 context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

                 var response = _env.IsDevelopment()
                 ? new ApiException(context.Response.StatusCode, ex.Message , ex.StackTrace ?.ToString())
                 : new ApiException(context.Response.StatusCode, "Internal Server Error");

                 var options = new JsonSerializerOptions {PropertyNamingPolicy = JsonNamingPolicy.CamelCase};

                 var json = JsonSerializer.Serialize(response, options);

                 await context.Response.WriteAsync(json);
            }
        }
    }
}