
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html'
})
export class ProductoFormComponent implements OnInit {
  @Input() producto: Producto | null = null;
  @Input() plantaId: number = 0;
  @Output() onSave = new EventEmitter<Producto>();
  @Output() onCancel = new EventEmitter<void>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['']
    });
  }

  ngOnInit(): void {
    if (this.producto) {
      this.form.patchValue({
        nombre: this.producto.nombre,
        tipo: this.producto.tipo
      });
    }
  }

  submit(): void {
    if (this.form.valid) {
      const formValues = this.form.value;
      const newProducto: Producto = {
        id: this.producto?.id || 0,
        nombre: formValues.nombre,
        tipo: formValues.tipo,
        plantaId: this.plantaId
      };
      this.onSave.emit(newProducto);
    }
  }

  cancel(): void {
    this.onCancel.emit();
  }
}
