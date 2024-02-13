import { randomUUID } from "node:crypto";

export class DataBaseMemory {
  #videos = new Map();

  listar() {
    return this.#videos.values();
  }

  create(video) {
    const videoId = randomUUID();

    this.#videos.set(videoId, video);
  }

  update(videoId, video) {
    this.#videos.set(videoId, video);
  }

  delete(videoId) {
    this.#videos.delete(videoId);
  }
}
