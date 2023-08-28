using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace HeartBeatsv2.Models;

public partial class HeartBeatsv2Context : DbContext
{
    public HeartBeatsv2Context()
    {
    }

    public HeartBeatsv2Context(DbContextOptions<HeartBeatsv2Context> options)
        : base(options)
    {
    }

    public virtual DbSet<Donor> Donors { get; set; }

    public virtual DbSet<Report> Reports { get; set; }

    public virtual DbSet<Request> Requests { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Donor>(entity =>
        {
            entity.HasKey(e => e.Donorid).HasName("PK__donor__A58AD10911F7032B");

            entity.ToTable("donor");

            entity.HasIndex(e => e.Email, "unq").IsUnique();

            entity.HasIndex(e => e.Number, "unq1").IsUnique();

            entity.Property(e => e.Donorid).HasColumnName("donorid");
            entity.Property(e => e.Alcoholic)
                .HasMaxLength(5)
                .HasColumnName("alcoholic");
            entity.Property(e => e.Blood)
                .HasMaxLength(15)
                .HasColumnName("blood");
            entity.Property(e => e.City)
                .HasMaxLength(25)
                .HasColumnName("city");
            entity.Property(e => e.Dob)
                .HasColumnType("date")
                .HasColumnName("dob");
            entity.Property(e => e.Email)
                .HasMaxLength(45)
                .HasColumnName("email");
            entity.Property(e => e.Gender)
                .HasMaxLength(15)
                .HasColumnName("gender");
            entity.Property(e => e.Name)
                .HasMaxLength(30)
                .HasColumnName("name");
            entity.Property(e => e.Number)
                .HasMaxLength(10)
                .HasColumnName("number");
            entity.Property(e => e.Password)
                .HasMaxLength(25)
                .HasColumnName("password");
            entity.Property(e => e.State)
                .HasMaxLength(25)
                .HasColumnName("state");
        });

        modelBuilder.Entity<Report>(entity =>
        {
            entity.HasKey(e => e.Reportid).HasName("PK__report__1C9A42557D585721");

            entity.ToTable("report");

            entity.Property(e => e.Reportid).HasColumnName("reportid");
            entity.Property(e => e.Donorid).HasColumnName("donorid");
            entity.Property(e => e.RecipName)
                .HasMaxLength(25)
                .HasColumnName("recip_name");
            entity.Property(e => e.RecipPhnNum).HasColumnName("recip_phnNum");
            entity.Property(e => e.Report1)
                .HasColumnType("text")
                .HasColumnName("report");
            entity.Property(e => e.Tym)
                .HasColumnType("datetime")
                .HasColumnName("tym");

            entity.HasOne(d => d.Donor).WithMany(p => p.Reports)
                .HasForeignKey(d => d.Donorid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk2");
        });

        modelBuilder.Entity<Request>(entity =>
        {
            entity.HasKey(e => e.Reqid).HasName("PK__request__20C372014FB456D9");

            entity.ToTable("request");

            entity.Property(e => e.Reqid).HasColumnName("reqid");
            entity.Property(e => e.Donorid).HasColumnName("donorid");
            entity.Property(e => e.RecipName)
                .HasMaxLength(25)
                .HasColumnName("recip_name");
            entity.Property(e => e.RecipPhnNum).HasColumnName("recip_phnNum");
            entity.Property(e => e.Request1)
                .HasColumnType("text")
                .HasColumnName("request");
            entity.Property(e => e.Tym)
                .HasColumnType("datetime")
                .HasColumnName("tym");

            entity.HasOne(d => d.Donor).WithMany(p => p.Requests)
                .HasForeignKey(d => d.Donorid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk1");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
