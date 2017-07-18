package com.food.portal.service.impl;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.food.portal.mapper.FoodRestMapper;

import com.food.portal.model.FoodRest;
import com.food.portal.service.FoodRestService;
//import com.daesang.apip.mgmt.common.web.config.ApiConstants;

/**
 * Food Image 서비스
 *
 */
@Service
public class FoodRestServiceImpl implements FoodRestService{

	@Autowired
	FoodRestMapper foodRestMapper;
	
	@Override
	@Transactional
	public int setFoodRest(FoodRest foodRest) {
		return foodRestMapper.insertFoodRest(foodRest);
	}
	
//    @Override
//    public void modifyFoodImage(FoodRest foodRest) {
/*
    	String imageCategory = foodImage.getImageCategoryCode();
        if(foodImageMapper.updateFoodImage(foodImage)==0)
            throw new ServiceException("404", "foodImage");
        if(imageCategory.equals("JPG_500")||imageCategory.equals("PNG_500")||imageCategory.equals("JPGW_500")||imageCategory.equals("PNGW_500")){
        	if("".equals(foodImage.getImagePath())){
        		if(imageCategory.equals("JPG_500")){
                    foodImage.setImageUrl("");
                    foodImageMapper.updateFoodInfo(foodImage);
                }
        	}else{
        		if(imageCategory.equals("JPG_500")){
                    foodImage.setImageUrl(env.getProperty("multipart.fileupload.imageUrl")+foodImage.getFoodId()+"_JPG_500.jpg");
                    foodImageMapper.updateFoodInfo(foodImage);
                }
                String warterMarkImageCode = StringHelper.parseToken(imageCategory,"_").get(0)+"_150";
                String filePath = env.getProperty("multipart.fileupload.foodImagePath");
                String fileExt = FilenameUtils.getExtension(foodImage.getImagePath());
                String fileName = foodImage.getFoodId()+"_"+warterMarkImageCode+"."+fileExt;
                String imageFileFullPath = filePath + "/" + warterMarkImageCode + "/" + fileName;
                
                FoodImage foodResizeImage = new FoodImage();
                foodResizeImage.setFoodId(foodImage.getFoodId());
                foodResizeImage.setImageCategoryCode(warterMarkImageCode);
                foodResizeImage.setImagePath(imageFileFullPath);
                foodImageMapper.updateFoodImage(foodResizeImage);
                
                try {
                    makeResizeImage(foodImage.getImagePath(), imageFileFullPath, fileExt);
                } catch (Exception e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                    throw new ServiceException("8401");
                }
        	}
        }
*/
//}
    
    

}
