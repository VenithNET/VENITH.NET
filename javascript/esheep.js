// Sheep Spawner
document.getElementById("esheepButton").addEventListener("click", function () {
  let esheep = new eSheep({ allowPets: "all", allowPopup: "no" });
  esheep.Start();
});
