import { useSearchParams } from 'react-router-dom';
import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { useMemo } from 'react';


export const ListagemDeCidade: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  return (
    <LayoutBaseDePagina 
      titulo='Listagem de cidades'
      barraDeFerramentas={
        <FerramentasDaListagem
          mostrarInputBusca
          textoBotaoNovo="Novo"
          textoDaBusca={searchParams.get('busca') ?? ''}
          aoMudarTextoDeBusca={texto => setSearchParams({ busca: texto}, { replace: true })}
        />
      }>

    </LayoutBaseDePagina>
  );
};