package com.kemper.uft;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/rest/v1/ft")
public class FormsTrackingController {
	
	private static final Logger logger = LoggerFactory.getLogger(FormsTrackingController.class);
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/requests", method = RequestMethod.GET)
	@ResponseBody
	public String getRequests(Model model) {
		
		
		return "getRequests";
	}
	
}
