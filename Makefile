.PHONY: gen_proto gen_proto_go gen_proto_ts

setup_proto:
	go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.33.0
	go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.3.0
	npm install

gen_proto:
	$(MAKE) gen_proto_ts
	$(MAKE) gen_proto_go

gen_proto_go:
	protoc --proto_path=./proto/src --go_out=./proto/golang/pb_out --go_opt=paths=source_relative --go-grpc_out=./proto/golang/pb_out --go-grpc_opt=paths=source_relative ./proto/src/*.proto

gen_proto_ts:
	npx protoc --ts_out=./proto/typescript/pb_out --proto_path=./proto/src ./proto/src/*.proto
