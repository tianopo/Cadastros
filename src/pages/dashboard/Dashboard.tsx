import { FerramentasDaListagem } from '../../shared/components/ferramentas-da-listagem/FerramentasDeListagem';
import { LayoutBaseDePagina } from '../../shared/layouts';

export const Dashboard= () =>{
  return(
    <LayoutBaseDePagina 
      titulo='Página Inicial' barraDeFerramentas={(
        <FerramentasDaListagem 
          mostrarInputBusca
          textoBotaoNovo='Nova'
        />
      )}>
      testando
    </LayoutBaseDePagina>
  );
};