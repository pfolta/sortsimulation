/*
 * Language.java
 * Copyright (C) 2008-2009 Peter Folta. All rights reserved.
 * 
 * Version: 1.2.1
 * Created: 2009-03-26
 * Website: http://www.peterfolta.de/software/sortsimulation
 * 
 * Movie Archive is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

package net.peterfolta.sortsimulation.main;

import org.jdom.Document;
import org.jdom.Element;
import org.jdom.input.SAXBuilder;

public class Language {
	
	private String filename;
	
	private Document languageDocument;
	private Element rootElement;
	private Element informationElement;
	private Element translationsElement;
	
	public Language() {
		filename = "res/lng/" + Main.settings.getCurrentLanguage().toLowerCase() + ".xml";
		
		try {
			languageDocument = new SAXBuilder().build(filename);
			rootElement = languageDocument.getRootElement();
			informationElement = rootElement.getChild("Information");
			translationsElement = rootElement.getChild("Translations");
		} catch (Exception exception) {
			Main.exit(2);			
		}
	}
	
	public String getTranslationInformation(String key) {
		String result = "";
		
		try {
			result = informationElement.getChild(key).getText();
		} catch(Exception exception) {
			Main.exit(2);
		}
		
		return result;
	}
	
	public String getTranslationContent(String key) {
		String result = "";
		
		try {
			result = translationsElement.getChild(key).getText();
		} catch(Exception exception) {
			Main.exit(2);
		}
		
		return result;
	}

}