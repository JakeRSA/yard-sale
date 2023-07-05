import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import { StoreFront } from '../components/StoreFront/StoreFront';

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<CssBaseline>
				<StoreFront />
			</CssBaseline>
		</QueryClientProvider>
	);
}

export default App;
