# web-tools
Demos for new tools


```
echo "GET baidu.com" | vegeta attack -duration=5s -rate=5 | vegeta report --type=text
```

```
echo "GET http://httpbin.org/get" | vegeta attack -duration=30s -rate=10 -output=results-veg-httpbin-get.bin && cat results-veg-httpbin-get.bin | vegeta plot --title="HTTP Bin GET 10 rps for 30 seconds" > http-bin-get-10rps-30seconds.html
```


https://geshan.com.np/blog/2020/09/vegeta-load-testing-primer-with-examples/
