using HeartBeats.Services;
using HeartBeatsv2.Models;
using HeartBeatsv2.Services;
using HeartBeatsv2.Services.Interface;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddDbContext<HeartBeatsv2Context>(
    optionsAction: Options => Options.UseSqlServer(
        builder.Configuration.GetConnectionString("SQLServerConnection")));

builder.Services.AddScoped<IDonor, DonorService>();
builder.Services.AddScoped<IRequest, RequestService>();
builder.Services.AddScoped<IReport, ReportService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
