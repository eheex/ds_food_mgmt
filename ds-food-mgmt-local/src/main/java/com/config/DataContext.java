package com.config;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.bdapis.apip.core.model.MandatoryHeader;


@Configuration
public class DataContext {

	/**
	 * MandatoryHeader Headers
	 */
	@Bean
	public List<MandatoryHeader> mandatoryHeaders() {
		List<MandatoryHeader> requireHeaderList = new ArrayList<MandatoryHeader>();
		MandatoryHeader mandatoryHeader = new MandatoryHeader();
		mandatoryHeader.setName("x-lge-appKey");
		mandatoryHeader.setScope(MandatoryHeader.SCOPE_ALL);
		// ONLY_HEADER = 1,  BOTH_HEADER_AND_QUERY_STRING = 2;
		mandatoryHeader.setValueExtractMethod(2);
		requireHeaderList.add(mandatoryHeader);
		return requireHeaderList;
	}
	/**
	 * Skip Headers from Northbound
	 * @return
	 */
	@Bean
	public Set<String> skipHeaders() {
		Set<String> set = new HashSet<String>();
		set.add("connection");
		set.add("transfer-encoding");
		set.add("tdcprojectkey");
		set.add("accept-encoding");
		set.add("accept-charset");
		set.add("content-length");
		set.add("host");
		return set;
	}
	/**
	 * Skip Headers from Northbound
	 * @return
	 */
	@Bean
	public Set<String> skipContentInfoHeaders() {
		Set<String> set = new HashSet<String>();
		set.add("content-type");
		return set;
	}
	

	/**
	 * Skip Response Headers from Southhbound
	 * @return
	 */
	@Bean
	public Set<String> skipResponseHeaders() {
		Set<String> set = new HashSet<String>();
		set.add("server");
		set.add("pragma");
		set.add("cache-control");
		set.add("expires");
		set.add("content-language");
		set.add("content-length");
		set.add("content-type");
		set.add("transfer-encoding");
		set.add("connection");
		return set;
	}
	
	/**
	 * Skip Parameters from Northbound
	 * @return
	 */
	@Bean
	public Set<String> skipParameters() {
		Set<String> set = new HashSet<String>();
		set.add("format");
		set.add("remoteIp");
		return set;
	}
}
