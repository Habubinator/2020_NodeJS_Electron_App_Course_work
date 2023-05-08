function GoTo(direct){
	switch(direct){
		case `Settings`:
			document.getElementById(`sectionmenu`).style.display = `none`;
			document.getElementById(`sectionsettings`).style.display = `block`;
			document.getElementById(`sectiongame`).style.display = `none`;
			writeModes()
		break;

		case `Game`:
			document.getElementById(`sectiongame`).style.display = `block`;
			document.getElementById(`sectionmenu`).style.display = `none`;
			document.getElementById(`sectionsettings`).style.display = `none`;
			writeModes()
			for(i=0;i<5;i++){
				if (document.getElementById(`setoptn`).value == game[i][0]) {
					gamemode = i
					break
				}else{gamemode = 0}
			}
			numberofquestions = 1;
			questionmaker()
			RestartHelp()
		break;

		case `Menu`:
			document.getElementById(`sectiongame`).style.display = `none`;
			document.getElementById(`sectionmenu`).style.display = `block`;
			document.getElementById(`sectionsettings`).style.display = `none`;
			document.getElementById(`sectiondefeatscreen`).style.display = `none`;
		break

		case `Defeat`:
			document.getElementById(`sectiondefeatscreen`).style.display = `block`;
			document.getElementById(`sectiongame`).style.display = `none`;
			document.getElementById(`sectionmenu`).style.display = `none`;
			document.getElementById(`sectionsettings`).style.display = `none`;
		break

		case `Win`:
			document.getElementById(`sectiondefeatscreen`).style.display = `none`;
			document.getElementById(`sectiongame`).style.display = `none`;
			document.getElementById(`sectionmenu`).style.display = `none`;
			document.getElementById(`sectionsettings`).style.display = `none`;
			document.getElementById(`sectionwinscreen`).style.display = `block`;
		break

		case `Mode`:
			document.getElementById(`sectiondefeatscreen`).style.display = `none`;
			document.getElementById(`sectiongame`).style.display = `none`;
			document.getElementById(`sectionmenu`).style.display = `none`;
			document.getElementById(`sectionsettings`).style.display = `none`;
			document.getElementById(`sectionwinscreen`).style.display = `none`;
			document.getElementById(`modechange`).style.display = `block`;
			document.getElementById(`questionchange`).style.display = `none`;
		break

		case `Question`:
			document.getElementById(`sectiondefeatscreen`).style.display = `none`;
			document.getElementById(`sectiongame`).style.display = `none`;
			document.getElementById(`sectionmenu`).style.display = `none`;
			document.getElementById(`sectionsettings`).style.display = `none`;
			document.getElementById(`sectionwinscreen`).style.display = `none`;
			document.getElementById(`modechange`).style.display = `none`;
			document.getElementById(`questionchange`).style.display = `block`;
		break
	}
}