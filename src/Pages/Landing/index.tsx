import { Grid, Typography } from '@mui/material';
import './LandingPage.scss';
export default function LandingPage() {
	return (
		<Grid className="landing-page" container>
			<Grid className="landing-page-menu-top" container>
				<Grid className='landing-page-logo' item xs={8}>
					<Typography>CreacTivo + Logo</Typography>
				</Grid>
				<Grid item xs={1}>
					<button>Inicio</button>
				</Grid>
				<Grid item xs={1}>
					<button>Inicio</button>
				</Grid>
				<Grid item xs={1}>
					<button>Inicio</button>
				</Grid>
				<Grid item xs={1}>
					<button>Inicio</button>
				</Grid>
			</Grid>
		</Grid>
	);
}
