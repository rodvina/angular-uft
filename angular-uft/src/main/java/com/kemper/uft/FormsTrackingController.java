package com.kemper.uft;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.UUID;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.time.DateUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kemper.uft.model.TrackingRequest;

@Controller
@RequestMapping("/rest/v1/ft")
public class FormsTrackingController {
	
	private static final Logger logger = LoggerFactory.getLogger(FormsTrackingController.class);
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/requests", method = RequestMethod.GET)
	@ResponseBody
	public List<TrackingRequest> getRequests(Model model) {
		
		int max = 400;
		List<TrackingRequest> list = new ArrayList<TrackingRequest>(max);

		for (int i=100; i<max; i++) {
			Date d = new Date();
			TrackingRequest trackingRequest = new TrackingRequest();
			trackingRequest.setRequestDate(new Date());
			trackingRequest.setCompany("SLI"+i);			
			trackingRequest.setSource("Policy System");
			trackingRequest.setPolicyNumber(new Random().nextInt(89999999)+"");
			Date effDate = DateUtils.addDays(d, 3);
			trackingRequest.setEffDate(effDate);
			trackingRequest.setReferenceNo(i+"9474");
			trackingRequest.setReferenceType("Policy Number");
			trackingRequest.setEvent("BCMINVA");
			trackingRequest.setPacketType("Invoice");
			trackingRequest.setCompletedFlag("C");
			trackingRequest.setPacketId("104"+i+"35");
			trackingRequest.setUuid(UUID.randomUUID());
			list.add(trackingRequest);
		};
		return list;
	}
	
}
