package com.food.portal.util;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


import javax.imageio.ImageIO;

import org.imgscalr.Scalr;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

/**
 * File-Upload Handler
 * 
 */
public class FileHepler {
    
    private static final Logger LOGGER = LoggerFactory.getLogger(FileHepler.class);

    /**
     * 파일 업로드
     * 
     * @param uploadPath 파일 업로드 시스템 절대경로
     * @param file MultipartFile
     * @return 변경된 파일명
     * @throws IOException
     */
    public String upload(String path, String fileName, MultipartFile file) throws IOException {
        File uploadPath = new File(path);
        if(!uploadPath.exists()) {
            uploadPath.mkdirs();
        }
        
        File targetFile = new File(uploadPath, fileName);
        FileOutputStream fos = null;

        try {
            fos = new FileOutputStream(targetFile);

            FileCopyUtils.copy(file.getInputStream(), fos);
            
            // Logging
            LOGGER.debug(file.toString());
        } finally {
            if (fos != null) {
                fos.close();
            }
        }
        
        return fileName;
    }
    /**
     * 파일 업로드
     * 
     * @param uploadPath 파일 업로드 시스템 절대경로
     * @param file MultipartFile
     * @return 변경된 파일명
     * @throws IOException
     */
    public String upload(String path, String fileName, File file) throws IOException {
        File uploadPath = new File(path);
        if(!uploadPath.exists()) {
            uploadPath.mkdirs();
        }
        
        File targetFile = new File(uploadPath, fileName);
        FileCopyUtils.copy(file, targetFile);
            
        return fileName;
    }
    
    public List<File> getFilePathListForFolder(String folderPath) {
        final File folder = new File(folderPath);
        return getFilePathListForFolder(folder);
    }
    public List<File> getFilePathListForFolder( final File folder) {
        List<File> fileList = new ArrayList<File>();
        for (final File fileEntry : folder.listFiles()) {
            if (fileEntry.isDirectory()) {
                fileList.addAll(getFilePathListForFolder(fileEntry));
            } else {
                fileList.add(fileEntry);
            }
        }
        return fileList;
    }
    public static void imageResize(String orgFilePath, String targetFilePath, String imageType, int size) throws Exception{

        BufferedImage originalImage = ImageIO.read(new File(orgFilePath));
            
        int imgwidth = Math.min(originalImage.getHeight(),  originalImage.getWidth());
        int imgheight = imgwidth;
            
        BufferedImage scaledImage = Scalr.crop(originalImage, (originalImage.getWidth() - imgwidth)/2, (originalImage.getHeight() - imgheight)/2, imgwidth, imgheight, null);
            
        BufferedImage resizedImage = Scalr.resize(scaledImage, size, size, null);
            
        ImageIO.write(resizedImage, imageType, new File(targetFilePath));
        
    }
}
