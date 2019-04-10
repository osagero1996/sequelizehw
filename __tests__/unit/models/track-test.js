const { expect } = require('chai');
const Track = require('./../../../models/track');


describe('name', () => {
  it('should not be number and fail', async () => {
    try {
      let track = new Track({milliseconds: 'a'});
      await track.validate();
    } catch (error) {
      expect(error.errors[0].message).to.equal('Must be a number');
    } finally {

    }
  });

  it('should be a number', async () => {
    try {
      let track = new Track({milliseconds: 1});
      await track.validate();
    } catch (error) {
      expect(error.errors[0].message).to.equal(undefined);
    } finally {

    }
  });


});
