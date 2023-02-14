<?php
    class Query extends Conexion {

        private $pdo, $con, $sql, $datos;

        public function __construct() {
            $this->pdo = new Conexion();
            $this->con = $this->pdo->connect();
        }

        public function select(String $sql) {
            $this->sql = $sql;
            $resul = $this->con->prepare($this->sql);
            $resul->execute();
            $data = $resul->fetch(PDO::FETCH_ASSOC);
            return $data;
        }

        public function selectAll(String $sql) {
            $this->sql = $sql;
            $resul = $this->con->prepare($this->sql);
            $resul->execute();
            $data = $resul->fetchAll(PDO::FETCH_ASSOC);
            return $data;
        }

        public function save(string $sql, array $datos){
            $this->sql = $sql;
            $this->datos = $datos;
            $insert = $this->con->prepare($this->sql);
            $data = $insert->execute($this->datos);
            if($data){
                $res = 1;
            }else{
                $res = 0;
            }
            return $res;
        }

        public function saveNoArray(string $sql){
            $this->sql = $sql;
            $insert = $this->con->prepare($this->sql);
            $data = $insert->execute();
            if($data){
                $res = 1;
            }else{
                $res = 0;
            }
            return $res;
        }

        public function ejecutar(string $sql, array $datos){
            $this->sql = $sql;
            $this->datos = $datos;
            $resul = $this->con->prepare($this->sql);
            $resul->execute($this->datos);

            $data = $resul->fetch(PDO::FETCH_ASSOC);
            return $data;
        }
    }
?>