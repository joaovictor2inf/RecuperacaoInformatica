document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('form-visita').addEventListener('submit',function(e){
 e.preventDefault();
 const f=new FormData(this);
 const linhas=[
  'SOLICITAÇÃO DE VISITA - AGRO LIMPO','',
  'Nome: '+f.get('nome'),
  'Propriedade: '+f.get('propriedade'),
  'Localização: '+f.get('local'),
  'Celular/WhatsApp: '+f.get('telefone'),
  'E-mail: '+f.get('email'),
  'Informações sobre a criação: '+(f.get('mensagem')||'Não informado')
 ];
 const assunto=encodeURIComponent('Solicitação de visita - Agro Limpo');
 const corpo=encodeURIComponent(linhas.join('\n'));
 document.getElementById('status').textContent='Sua solicitação está pronta. Escolha o aplicativo de e-mail para encaminhá-la. O endereço oficial da Agro Limpo deverá ser configurado pela empresa.';
 window.location.href='mailto:?subject='+assunto+'&body='+corpo;
});
