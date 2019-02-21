import { Selector } from 'testcafe';

fixture('Post Message to Dynamic iframe').page('http://localhost:9000/');
test('post', async t => {
  await t.click('#go');
  await t.switchToIframe('iframe');
  await t.expect(Selector('#msg').withText('1234').count).eql(1, 'Got message')
  await t.debug();
});
