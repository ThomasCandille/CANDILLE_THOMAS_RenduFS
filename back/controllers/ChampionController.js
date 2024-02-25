import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

//Get all champions
const getChampions = async (req, res) => {
  prisma.champion.findMany()
  .then((champions) => {
    res.json(champions);
  })
  .catch((error) => {
    res.json(error);
  });
}

//Get a champion by id
const getChampion = async (req, res) => {
  let id = parseInt(req.params.id);
  prisma.champion.findUnique({
    where: {
      id: id,
    }
  })
  .then((champion) => {
    res.json(champion);
  })
  .catch((error) => {
    res.json(error);
  });
}

//Create a new champion
const createChampion = async (req, res) => {
  let champion = req.body;
  console.log(champion);

  prisma.champion.create({
    data: {
      name: champion.name,
      type: champion.type,
    },
  })
  .then((champion) => {
    res.json(champion);
  })
  .catch((error) => {
    res.json(error);
  });
}

//Update a champion
const updateChampion = async (req, res) => {
  let id = parseInt(req.params.id);
  let champion = req.body;
  prisma.champion.update({
    where: {
      id: id,
    },
    data: {
      name: champion.name,
      type: champion.type,
    },
  })
  .then((champion) => {
    res.json(champion);
  })
  .catch((error) => {
    res.json(error);
  });
}

//Delete a champion
const deleteChampion = async (req, res) => {
  let id = parseInt(req.params.id);
  prisma.champion.delete({
    where: {
      id: id,
    },
  })
  .then((champion) => {
    res.json(champion);
  })
  .catch((error) => {
    res.json(error);
  });
}

export { getChampions, getChampion, createChampion, updateChampion, deleteChampion}