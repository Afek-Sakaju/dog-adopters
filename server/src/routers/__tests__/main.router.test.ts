import request from 'supertest';

import app from '../../app';

describe('main route tests', function () {
    it('responds health API with OK status', function (done) {
        request(app)
            .get('/health')
            .expect(200)
            .end((_err, res) => {
                expect(res).toHaveProperty('text', 'OK');
                done();
            });
    });

    it("responds home page API with Server's default API message", (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end((_err, res) => {
                expect(res).toHaveProperty('text', "Server's default API");
                done();
            });
    });
});
