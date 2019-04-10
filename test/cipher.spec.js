describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',()=>{
      assert.equal(window.cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
    it('deberia retornar "taxm,oaya,qefme" para "hola como estas" con offset 12',()=>{
      assert.equal(window.cipher.encode(12,"hola como estas"),"taxm,oaya,qefme");
    });
    it('deberia retornar "bifu<ymnum::" para "hola estas??" con offset 358',()=>{
      assert.equal(window.cipher.encode(358,"hola estas??"),"bifu<ymnum::");
    });
    it('deberia retornar ">-" para ":)" con offset 4',()=>{
      assert.equal(window.cipher.encode(358,":)"),">-");
    });
  });    

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
      assert.equal(window.cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    it('deberia retornar "hola como estas" para "taxm,oaya,qefme"con offset 12',()=>{
      assert.equal(window.cipher.encode(12,"taxm,oaya,qefme"),"hola como estas");
    });
     it('deberia retornar "hola estas??" para "bifu<ymnum::"con offset 358',()=>{
      assert.equal(window.cipher.encode(358,"bifu<ymnum::"),"hola estas??");
    });
    it('deberia retornar ":)" para ">-" con offset 4',()=>{
      assert.equal(window.cipher.encode(358,">-"),":)"); 
    }); 


  });

});
