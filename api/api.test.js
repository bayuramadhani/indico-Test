const axios = require('axios');
const { expect } = require('chai');

const BASE_URL = 'https://petstore.swagger.io/v2';

describe('Petstore API Tests', () => {
  let petId = Date.now();

  it('should add a new pet', async () => {
    const newPet = {
      id: petId,
      name: "Buddy",
      status: "available"
    };

    const res = await axios.post(`${BASE_URL}/pet`, newPet);
    expect(res.status).to.equal(200);
    expect(res.data.name).to.equal("Buddy");
    expect(res.data.status).to.equal("available");
  });

  it('should get pets with status available', async () => {
    const res = await axios.get(`${BASE_URL}/pet/findByStatus`, {
      params: { status: "available" }
    });

    expect(res.status).to.equal(200);
    res.data.forEach(pet => {
      expect(pet.status).to.equal("available");
    });
  });

  it('should get pets with status pending', async () => {
    const res = await axios.get(`${BASE_URL}/pet/findByStatus`, {
      params: { status: "pending" }
    });

    expect(res.status).to.equal(200);
    res.data.forEach(pet => {
      expect(pet.status).to.equal("pending");
    });
  });
});
