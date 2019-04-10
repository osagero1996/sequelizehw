const frisby = require('frisby');

const { Joi } = frisby //equal to const Joi =frisby.Joi

it('should return a status of 200 when the track is found', () => {
  return frisby
  .get('http://localhost:8000/api/tracks/5')
  .expect('status', 200);

});


it('should return a status of 200 when track is updated and appropriate response body', () => {
  return frisby
  .patch('http://localhost:8000/api/tracks/12', {
    name: 'Osagie Ero',
    milliseconds: 60000,
    unitPrice: 1000

  })
  .expect('status', 200)
  .expect('json', 'name', 'Osagie Ero')
  .expect('json', 'milliseconds', 60000)
  .expect('json', 'unitPrice', 1000);

});

it('should return error about wrong data types', () => {
  return frisby
    .patch('http://localhost:8000/api/tracks/12', {
      name: '',
      milliseconds: 'a',
      unitPrice: 'b'
    })
    .expect('status', 422)
    .expect('json', 'errors',[
      {
        attribute: "name",
        message: "Name is required"
      },
      {
        attribute: "unitPrice",
        message: "Must be a number"
      },
      {
        attribute: "milliseconds",
        message: "Must be a number"
      }
    ]);

});

// .expect('jsonTypes', 'milliseconds', Joi.number().required())
// .expect('jsonTypes', 'unitPrice', Joi.number().required());
