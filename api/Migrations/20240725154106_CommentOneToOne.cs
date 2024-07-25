using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class CommentOneToOne : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c1de859e-96be-4712-8f06-3f0ac82d1c63");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fd57b078-eda6-4851-bb21-c3cc02f3e955");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "e4a1066c-fee7-47d8-9d54-bb536a1c4266", null, "User", "USER" },
                    { "ed746348-07ac-470e-a3ad-4bf39bbe59ed", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e4a1066c-fee7-47d8-9d54-bb536a1c4266");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ed746348-07ac-470e-a3ad-4bf39bbe59ed");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "c1de859e-96be-4712-8f06-3f0ac82d1c63", null, "Admin", "ADMIN" },
                    { "fd57b078-eda6-4851-bb21-c3cc02f3e955", null, "User", "USER" }
                });
        }
    }
}
