export const getSavedPetIds = () => {
  const savedPetIds = localStorage.getItem('saved_pets')
    ? JSON.parse(localStorage.getItem('saved_pets'))
    : [];

  return savedPetIds;
};

export const savePetIds = (petIdArr) => {
  if (petIdArr.length) {
    localStorage.setItem('saved_pets', JSON.stringify(petIdArr));
  } else {
    localStorage.removeItem('saved_pets');
  }
};

export const RemovePetId = (petId) => {
  const savedPetIds = localStorage.getItem('saved_pets')
    ? JSON.parse(localStorage.getItem('saved_pets'))
    : null;

  if (!savedPetIds) {
    return false;
  }

  const updatedSavedPetIds = savedPetIds?.filter((savedPetId) => savedPetId !== petId);
  localStorage.setItem('saved_pets', JSON.stringify(updatedSavedPetIds));

  return true;
};

export const getSavedPetForAdoptionIds = () => {
  const savedPetIds = localStorage.getItem('saved_pets_for_adoption')
    ? JSON.parse(localStorage.getItem('saved_pets_for_adoption'))
    : [];

  return savedPetIds;
};

export const savePetForAdoptionIds = (petIdArr) => {
  if (petIdArr.length) {
    localStorage.setItem('saved_pets_for_adoption', JSON.stringify(petIdArr));
  } else {
    localStorage.removeItem('saved_pets_for_adoption');
  }
};

export const RemovePetForAdoptionId = (petId) => {
  const savedPetIds = localStorage.getItem('saved_pets_for_adoption')
    ? JSON.parse(localStorage.getItem('saved_pets_for_adoption'))
    : null;

  if (!savedPetIds) {
    return false;
  }

  const updatedSavedPetIds = savedPetIds?.filter((savedPetId) => savedPetId !== petId);
  localStorage.setItem('saved_pets_for_adoption', JSON.stringify(updatedSavedPetIds));

  return true;
};
