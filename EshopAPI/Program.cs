using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using EshopAPI.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<EshopAPIContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("EshopAPIContext") ?? throw new InvalidOperationException("Connection string 'EshopAPIContext' not found.")));

// Add services to the container.


builder.Services.AddControllers();

// Configure CORS
builder.Services.AddCors(option =>
{
    option.AddPolicy("AllowSpecificOrigin",
        builder => builder
            .WithOrigins("http://localhost:3000") //url mac dinh cua React
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials());
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();
app.UseCors("AllowSpecificOrigin");
app.UseStaticFiles();

app.MapControllers();

app.Run();
