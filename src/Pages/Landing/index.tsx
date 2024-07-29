import { Button, Grid, Typography } from '@mui/material';
import './LandingPage.scss';
export default function LandingPage() {
	return (
		<Grid className="landing-page" container>
			<Grid className="landing-page-menu-top" container>
				<Grid className="landing-page-logo" item xs={8}>
					<img src="/images/logo-creactivo.png" width="200px" />
				</Grid>
				<Grid item xs={4}>
					<Grid container>
						<Grid className="button-menu-top" item xs={2.5}>
							<Button variant="text">Inicio</Button>
						</Grid>
						<Grid className="button-menu-top" item xs={2.5}>
							<Button variant="text">Curso</Button>
						</Grid>
						<Grid className="button-menu-top" item xs={2.5}>
							<Button variant="text">Planes</Button>
						</Grid>
						<Grid className="button-menu-top" item xs={2.5}>
							<Button variant="text">Contacto</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid className="learn-landing" container>
				<Typography>assadas</Typography>
			</Grid>
		</Grid>
	);
}
