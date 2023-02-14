<?php
    class Compras extends Controller{
        public function __construct(){
            session_start();
            parent::__construct();
        }

        public function index(){
            $this->views->getView($this, "index");
        }

        public function buscarCodigo($codigo){
            $data = $this->model->getProductoCodigo($codigo); 
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }
        
        public function ingresar(){
            $id = $_POST['id'];
            $datos = $this->model->getProductosCompra($id);
            $id_producto = $datos['id'];
            $id_usuario = $_SESSION['id_usuario'];
            $precio = $datos['precio_compra'];
            $cantidad = $_POST['cantidad'];
            $subtotal = $precio * $cantidad;
            if ($cantidad > $datos['cantidad']) {
                $data = "stock";
            } else {
                $validar = $this->model->validarProducto($id_producto, $id_usuario);
                if (empty($validar)) {
                    $data = $this->model->registrarDetalle($id_producto, $id_usuario, $precio, $cantidad, $subtotal);
                } else {
                    $cantidad = $validar['cantidad'] + $cantidad;
                    $subtotal = $precio * $cantidad;
                    $id_detalle = $validar['id'];
                    
                    if ($cantidad > $datos['cantidad']) {
                        $data = "stock";
                    }else{
                        $data = $this->model->modificarDetalle($cantidad, $subtotal, $id_detalle);
                    }
                }
            }
            
            if ($data == "ok") {
                $msj = "ok";
            } else if($data == "stock"){
                $msj = "Error al ingresar el stock";
            }else{
                $msj = "Error al ingresar el producto";
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function listar(){
            $id_usuario = $_SESSION["id_usuario"];
            $data['detalle'] = $this->model->getDetalle($id_usuario);
            $data['total'] = $this->model->calcularTotal($id_usuario);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function delete(int $id){
            $data = $this->model->deleteDetalle($id);
            if ($data == "ok") {
                $msj = "ok";
            } else {
                $msj = "No se pudo eliminar el producto";
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function completarCompras($cliente){
            $id_usuario = $_SESSION['id_usuario'];
            $total = $this->model->calcularTotal($id_usuario);
            $data = $this->model->completarCompras($total['total'], $cliente, $id_usuario);
            if (is_numeric($data['id'])) {
                $msj = array('msj' => 'ok', 'id_compra' => $data['id']);
            } else {
                $msj = array('msj' => 'No se pudo registrar la compra');
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function cancelarCompra(){
            $data = $this->model->cancelarCompra($_SESSION['id_usuario']);
            if ($data == "ok") {
                $msj = "ok";
            } else {
                $msj = "No se pudo cancelar la compra";
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function verificarCliente(string $dni){
            $data = $this->model->verificarCliente($dni);
            if (!empty($data)) {
                if($data['estado'] == 1){
                    $msj = "ok";
                }else{
                    $msj = "inactivo";
                }
            } else {
                $msj = "no";
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function registrarCliente() {
            $dni = $_POST['dni'];
            $nombre = $_POST['nombre_cliente'];
            $direccion = $_POST['direccion'];
            $telefono = $_POST['telefono'];
            $id = $_POST['id'];
            if( empty($dni) || empty($nombre) || empty($telefono)  || empty($direccion)){
                $msj = "Todos los campos son obligatorios";
            }else{
                $data = $this->model->registrarCliente($dni, $nombre, $telefono, $direccion);
                if($data == "ok"){
                    $msj = "si";
                }else if($data == "existe"){
                    $msj = "El DNI ya existe";
                }else{
                    $msj = "Error al registrar el cliente";
                }
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function generarPDF($id_compra){
            $empresa = $this->model->getEmpresa();

            $productos = $this->model->getDetalleCompra($id_compra);
            
            require('Libraries/fpdf/fpdf.php');

            $pdf = new FPDF('P','mm', array(80, 200));

            $pdf->AddPage();
            $pdf->SetMargins(5, 0, 0);

            $pdf->SetTitle('Reporte de compra - ' . $id_compra);

            $pdf->SetFont('Arial','B',14);
            $pdf->Cell(65, 10, utf8_decode($empresa['nombre']), 0, 1, 'R');
            $pdf->Image(base_url . 'Assets/img/logo.png', 50, 16, 25, 25);

            $pdf->SetFont('Arial','B',10);
            $pdf->Cell(20, 5, 'RUC : ', 0, 0, 'L');
            $pdf->SetFont('Arial','',10);
            $pdf->Cell(15, 5, utf8_decode($empresa['ruc']), 0, 1, 'L');

            $pdf->SetFont('Arial','B',10);
            $pdf->Cell(20, 5, utf8_decode('Teléfono : '), 0, 0, 'L');
            $pdf->SetFont('Arial','',10);
            $pdf->Cell(15, 5, utf8_decode($empresa['telefono']), 0, 1, 'L');

            $pdf->SetFont('Arial','B',10);
            $pdf->Cell(20, 5, utf8_decode('Dirección : '), 0, 0, 'L');
            $pdf->SetFont('Arial','',10);
            $pdf->Cell(15, 5, utf8_decode($empresa['direccion']), 0, 1, 'L');

            $pdf->SetFont('Arial','B',10);
            $pdf->Cell(20, 5, utf8_decode('Folio : '), 0, 0, 'L');
            $pdf->SetFont('Arial','',10);
            $pdf->Cell(15, 5, utf8_decode($id_compra), 0, 1, 'L');

            $pdf->Ln();


            // Encabezados de productos

            $pdf->SetFont('Arial','B',10);
            $pdf->SetFillColor(0,0,0);
            $pdf->SetTextColor(255,255,255);
            $pdf->Cell(10, 5, utf8_decode('Cant'), 0, 0, 'L', true);
            $pdf->Cell(30, 5, utf8_decode('Descripción'), 0, 0, 'L', true);
            $pdf->Cell(12, 5, utf8_decode('Precio'), 0, 0, 'L', true);
            $pdf->Cell(15, 5, utf8_decode('Subtotal'), 0, 1, 'L', true);
            $pdf->SetFont('Arial','',10);
            $pdf->SetTextColor(0,0,0);
            foreach ($productos as $row){
                $pdf->Cell(10, 5, utf8_decode($row['cantidad']), 0, 0, 'L');
                $pdf->Cell(30, 5, utf8_decode($row['descripcion']), 0, 0, 'L');
                $pdf->Cell(12, 5, utf8_decode($row['precio']), 0, 0, 'R');
                $pdf->Cell(15, 5, utf8_decode($row['sub_total']), 0, 1, 'R');
                $total = $row['total'];
                $dni = $row['dni'];
                $nombre = $row['nombre'];
            }

            $pdf->Ln();

            $pdf->SetFont('Arial','B',10);
            $pdf->Cell(70, 5, utf8_decode('Total a pagar'), 0, 1, 'R');
            $pdf->SetFont('Arial','',10);
            $pdf->Cell(70, 5, utf8_decode($total . " S/."), 0, 1, 'R');

            $pdf->Ln();

            $pdf->SetFont('Arial','B',10);
            $pdf->Cell(60, 5, utf8_decode('Datos del cliente'), 0, 1, 'L');

            $pdf->Ln();

            $pdf->SetFont('Arial','B',10);
            $pdf->Cell(20, 5, utf8_decode('DNI : '), 0, 0, 'L');
            $pdf->SetFont('Arial','',10);
            $pdf->Cell(15, 5, utf8_decode($dni), 0, 1, 'L');

            $pdf->SetFont('Arial','B',10);
            $pdf->Cell(20, 5, utf8_decode('Nombre : '), 0, 0, 'L');
            $pdf->SetFont('Arial','',10);
            $pdf->Cell(15, 5, utf8_decode($nombre), 0, 1, 'L');

            $pdf->Ln();

            $pdf->SetFont('Arial','B',10);
            $pdf->Cell(20, 5, utf8_decode($empresa['mensaje']), 0, 0, 'L');

            $pdf->Output();
        }

        public function historial(){
            $this->views->getView($this, 'historial');
        }

        public function listarHistorial(){
            $data = $this->model->gethistorialcompra();
            for ($i=0; $i < count($data); $i++) { 
                $data[$i]['acciones'] = '<div>
                    <a class="btn btn-danger" href="'.base_url.'Compras/generarPDF/'.$data[$i]['id'].'" target="_blank"><i class="fas fa-file-pdf"></i></a>
                    </div>';
            }
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }
    }
?>