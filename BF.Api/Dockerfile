FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["BF.Api/BF.Api.csproj", "BF.Api/"]
RUN dotnet restore "BF.Api/BF.Api.csproj"
COPY . .
WORKDIR "/src/BF.Api"
RUN dotnet build "BF.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BF.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BF.Api.dll"]
