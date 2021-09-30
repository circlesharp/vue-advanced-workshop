require('../../util').createTestCase(__filename, (window, logs, done) => {
  const { Dep, autorun } = window;

  const dep = new Dep();

  autorun(() => {
    dep.depend();
    window.console.log('updated');
  });
  expect(logs.length).toBe(1);
  expect(logs[0][0]).toMatch(`updated`);

  dep.notify();
  expect(logs.length).toBe(2);
  expect(logs[1][0]).toMatch(`updated`);

  // 我新增的测试用例
  const FIRST_UPDATED = 'updated';
  const SECOND_UPDATED = 'second_updated';
  autorun(() => {
    dep.depend();
    window.console.log(SECOND_UPDATED);
  });

  expect(logs.length).toBe(3);
  expect(logs[2][0]).toMatch(SECOND_UPDATED);

  dep.notify();
  expect(logs.length).toBe(5);
  expect(logs[3][0]).toMatch(FIRST_UPDATED);
  expect(logs[4][0]).toMatch(SECOND_UPDATED);

  done();
});
