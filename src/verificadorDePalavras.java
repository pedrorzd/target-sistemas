import java.util.Scanner;

public class verificadorDePalavras {
    public static void main(String args[]) {

        char letra;
        String palavra;
        int contador = 0;
        int i;

        @SuppressWarnings("resource")
        Scanner input = new Scanner(System.in);

        System.out.print(
                "Olá usuário, nosso sistema possui o seguinte funcionamento, é preciso escrever uma palavra, de qualquer tamanho, "
                +
                "após a mesma ser digitada, é preciso inserir a letra a ser procurada, no final é apresentado quantas vezes a letra foi encontrada! escreva a palavra: ");
        palavra = input.nextLine();
        

        char vetPalavra[] = new char[palavra.length()];

        for (i = 0; i < palavra.length(); ++i) {
            vetPalavra[i] = palavra.charAt(i);
        }

        System.out.println("Agora insira a letra a ser buscada na palavra inserida: ");
        letra = input.next().charAt(0);
        char letraMinuscula = Character.toLowerCase(letra);

        // Verifica quantas vezes a letra aparece na palavra
        for (i = 0; i < palavra.length(); ++i) {
            if (Character.toLowerCase(vetPalavra[i]) == letraMinuscula) {
                ++contador;
            }
        }

        //
        if (contador > 0) {
            System.out.println("O número de vezes que a letra '" + letra + "' apareceu foi: " + contador + " vez(es).");
        } else {
            System.out.println("A letra '" + letra + "' não existe na palavra.");
        }

    }

}