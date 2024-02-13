import { fastify } from "fastify";
import { DataBaseMemory } from "./dataBase-memory.js";
import { randomUUID } from "node:crypto";

const server = fastify();
const dataBase = new DataBaseMemory();

server.post('/videos', (request, reply) => {
  const videoId = randomUUID();
  const { title, description, duration } = request.body;
  // console.log(request.params.id);
  // console.log(body);

  // console.log({
  //   title: title,
  //   description: description,
  //   duration: duration
  // });
  dataBase.create({
    id: videoId,
    title: title,
    description: description,
    duration: duration
  });
  // dataBase.create(body);
  console.log(dataBase.listar());

  return reply.status(201).send();
});

server.put("/videos/:id", (request, reply) => {});
server.delete("/videos/:id", (request, reply) => {});

server.get("/", () => {
  return "Ola mundo";
});

server.listen({
  port: 3333,
});
