using Microsoft.EntityFrameworkCore.Migrations;

namespace ShipApp.Migrations
{
    public partial class secondMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "GrossTonnage",
                table: "Ship",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<double>(
                name: "LengthOfVessel",
                table: "Ship",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<int>(
                name: "NetTonnage",
                table: "Ship",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<double>(
                name: "VesselWidth",
                table: "Ship",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<int>(
                name: "YearOfConstruction",
                table: "Ship",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "GrossTonnage",
                table: "Ship");

            migrationBuilder.DropColumn(
                name: "LengthOfVessel",
                table: "Ship");

            migrationBuilder.DropColumn(
                name: "NetTonnage",
                table: "Ship");

            migrationBuilder.DropColumn(
                name: "VesselWidth",
                table: "Ship");

            migrationBuilder.DropColumn(
                name: "YearOfConstruction",
                table: "Ship");
        }
    }
}
