import { Box, TextField, Paper, useTheme, Icon, Button } from '@mui/material';
import { Environment } from '../../environment';

interface IFerramentasDaListagem {
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoDeBusca?: (novoTexto: string) => void
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagem> = ({
  textoDaBusca = '',
  aoMudarTextoDeBusca,
  mostrarInputBusca = false,
  aoClicarEmNovo,
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
}) => {
  const theme = useTheme();

  return (
    <Box
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
      gap={1}
      component={Paper}>
      {mostrarInputBusca &&(
        <TextField 
          size='small'
          value={textoDaBusca}
          onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
          placeholder={Environment.INPUT_DE_BUSCA}
        />
      )}
      <Box flex={1} display="flex" justifyContent="end">
        {mostrarBotaoNovo &&(
          <Button
            color='primary'
            disableElevation
            variant='contained'
            onClick={aoClicarEmNovo}
            endIcon={<Icon>add</Icon>}
          >{textoBotaoNovo}</Button>
        )}
      </Box>
    </Box>
  );
};