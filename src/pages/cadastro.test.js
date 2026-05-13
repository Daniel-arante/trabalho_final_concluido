const testedocadastro = require('./function.app');
test('teste do cadastro ', () => {
    expect(testedocadastro.testedocadastro('pedrodaniel@gmail.com', 'Daniel@2')).toBe(true);
});