package br.rs.matheuspadilha.steps;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Então;
import io.cucumber.java.pt.Quando;
import org.junit.Assert;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class AprenderCucumberSteps {
    
    @Dado("^que criei o arquivo corretamente$")
    public void queCrieiOArquivoCorretamente() throws Throwable {
    
    }
    
    @Quando("^eu executá-lo$")
    public void executáLo() throws Throwable {
    
    }
    
    @Então("^a especificação deve finalizar com sucesso$")
    public void aEspecificaçãoDeveFinalizarComSucesso() throws Throwable {
    
    }
    private int contador = 0;
    @Dado("^que o valor do contador é (\\d+)$")
    public void queOValorDoContadorÉ(int arg0) throws Throwable {
        contador = arg0;
    }
    
    @Quando("^eu incrementar em (\\d+)$")
    public void euIncrementarEm(int arg0) throws Throwable {
        contador = contador + arg0;
    }
    
    @Então("^o valor do contador será (\\d+)$")
    public void oValorDoContadorSerá(int arg0) throws Throwable {
        Assert.assertEquals(arg0, contador);
    }
    
    Date entrega = new Date();
    
    @Dado("que o prazo é dia {data}")
    public void queOPrazoÉDia( Date data) {
       entrega = data;
    }
    
    @Quando("^a entrega atrasar em (\\d+) (dia|dias|mes|meses)$")
    public void aEntregaAtrasarEmDias(int arg0, String tempo) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(entrega);
        
        if (tempo.equals("dia") || tempo.equals("dias")) {
            cal.add(Calendar.DAY_OF_MONTH, arg0);
        }
    
        if (tempo.equals("mes") || tempo.equals("meses")) {
            cal.add(Calendar.MONTH, arg0);
        }
        
        entrega = cal.getTime();
    }
    
    @Então("^a entrega será efetuada em (\\d{2}\\/\\d{2}\\/\\d{4})$")
    public void aEntregaSeráEfetuadaEm(String data) {
        DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
        String dataFormatada = format.format(entrega);
        Assert.assertEquals(data, dataFormatada);
    }
    
    
    @Dado("^que o ticket( especial)? é (A.\\d{3})$")
    public void queOTicketÉAF345(String tipo, String arg0) {
    }
    
    @Dado("^que o valor da passagem é R\\$ (.*)$")
    public void queOValorDaPassagemÉR$(Double number) {
    }
    
    @Dado("^que o nome do passageiro é \"(.{5,20})\"$")
    public void queONomeDoPassageiroÉ(String arg0) {
    }
    
    @Dado("^que o telefone do passageiro é (9\\d{3}-\\d{4})$")
    public void queOTelefoneDoPassageiroÉ(String arg0) {
    }
    
    @Quando("^criar os steps$")
    public void criarOsSteps() {
    }
    
    @Então("^o teste vai funcionar$")
    public void oTesteVaiFuncionar() {
    }
}
