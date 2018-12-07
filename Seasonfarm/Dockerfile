FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 32575
EXPOSE 44305
EXPOSE 80

FROM microsoft/dotnet:2.2-sdk AS build
#setup node
ENV NODE_VERSION 8.11.1
ENV NODE_DOWNLOAD_SHA 0e20787e2eda4cc31336d8327556ebc7417e8ee0a6ba0de96a09b0ec2b841f60
#ARG HOST
#ENV REACT_APP_API_HOST=$HOST
RUN apt-get update && apt-get install curl -y
RUN curl -SL "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.gz" --output nodejs.tar.gz \
    && echo "$NODE_DOWNLOAD_SHA nodejs.tar.gz" | sha256sum -c - \
    && tar -xzf "nodejs.tar.gz" -C /usr/local --strip-components=1 \
    && rm nodejs.tar.gz \
    && ln -s /usr/local/bin/node /usr/local/bin/nodejs
WORKDIR /src
COPY /Seasonfarm.csproj Seasonfarm/
RUN dotnet restore Seasonfarm/Seasonfarm.csproj
COPY . .
#WORKDIR /src/Seasonfarm
RUN dotnet build Seasonfarm.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish Seasonfarm.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
#ENTRYPOINT ["dotnet", "Seasonfarm.dll"]
#CMD ["dotnet", "Seasonfarm.dll"]
CMD ASPNETCORE_URLS=http://*:$PORT && dotnet Seasonfarm.dll