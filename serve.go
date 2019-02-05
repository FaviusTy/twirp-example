package main

import (
	"context"
	"net/http"

	pb "github.com/FaviusTy/twirp-example/proto"
)

type BaseServer struct{}

func (s *BaseServer) EchoBase(ctx context.Context, req *pb.Sample_Base) (*pb.Sample_Base, error) {
	return req, nil
}

type RepetedServer struct{}

func (s *RepetedServer) EchoRepeated(ctx context.Context, req *pb.Sample_Repeated) (*pb.Sample_Repeated, error) {
	return req, nil
}

func main() {
	baseHandler := pb.NewEchoBaseServer(&BaseServer{}, nil)
	repeatedHandler := pb.NewEchoRepeatedServer(&RepetedServer{}, nil)
	mux := http.NewServeMux()
	mux.Handle(pb.EchoBasePathPrefix, baseHandler)
	mux.Handle(pb.EchoRepeatedPathPrefix, repeatedHandler)
	http.ListenAndServe(":8080", mux)
}
