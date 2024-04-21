import  cv2

#настройка камери, 0 - встроенная, 1 и болиее - другие камери устройства
cap = cv2.VideoCapture(0)
ret, frame = cap.read()

cv2. imshow('Camera', frame)
cv2.waitKey(0)

cap.release()
cv2.destroyAllWindows()